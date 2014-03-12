(ns cljs-demo.core
  (:require
   [dommy.core :as d]
   [cljs.core.async :refer [<! >! put! chan]])
  (:require-macros
   [cljs.core.async.macros :refer [go go-loop]]
   [dommy.macros :refer [node sel1]]))

(def img-path "resources/public/imgs/")

(def things [{:type "env-monitor" :monitors ["pollution" "noise"] :image "glyphicons_001_leaf.png"}
             {:type "personA" :name "John" :monitors ["crowdflow" "heatbeat"] :listens ["parking"] :image "glyphicons_003_user.png"}
             {:type "personB" :name "Mary" :listens ["parking" "pollution" "temprature"] :image "glyphicons_035_woman.png"}

             {:type "mobile" :name "Phone" :listens ["energy" "crowdflow" "noise" "temprature" "wind"] :image "glyphicons_279_tablet.png"}
             
             {:type "cars" :monitors ["traffic"] :name "M's Car" :listens ["parking"] :image "glyphicons_005_car.png"}
             {:type "transport" :monitors ["parking" "traffic"] :image "glyphicons_014_train.png"}
             {:type "weather-st" :monitors ["temprature" "wind"] :image "glyphicons_013_beach_umbrella.png"}
             
             {:type "building" :monitors ["energy" "pollution" "parking"] :image "glyphicons_089_building.png"}

             {:type "camden-la" :name "Camden Council" :listens ["everything"] :image "glyphicons_042_pie_chart.png"}
             ])

;;subscribers need to be specific and person i.e. Mary's car

(defn make-animatex [x]
  (doto (.createElementNS js/document "http://www.w3.org/2000/svg" "animate")
    (.setAttribute "dur" "1s") ; over 1 second
    (.setAttribute "attributeName" "cx") ; animate the radius value
    (.setAttribute "from" (+ x 20))
    (.setAttribute "to" 250)
    (.setAttribute "repeatCount" "indefinite")
    (.setAttribute "calcMode" "linear")))

(defn make-annimatey []
   (doto (.createElementNS js/document "http://www.w3.org/2000/svg" "animate")
    (.setAttribute "dur" "1s") ; over 1 second
    (.setAttribute "attributeName" "cy")
    (.setAttribute "from" 0)
    (.setAttribute "to" 150)
    (.setAttribute "repeatCount" "indefinite")
    (.setAttribute "calcMode" "linear")))


(defn rotate-lmax [rotate]
  (swap! rotate + 18)
  (.setAttribute (sel1 [:#l]) "transform" (str "rotate(" @rotate "300,37,50)")))

(defn make-animate-s-x [x]
  (doto (.createElementNS js/document "http://www.w3.org/2000/svg" "animate")
    (.setAttribute "dur" "1s") ; over 1 second
    (.setAttribute "attributeName" "cx") ; animate the radius value
    (.setAttribute "from" (- x 20))
    (.setAttribute "to" 250)
    (.setAttribute "repeatCount" "indefinite")
    (.setAttribute "calcMode" "linear")))

(defn make-annimate-s-y []
   (doto (.createElementNS js/document "http://www.w3.org/2000/svg" "animate")
    (.setAttribute "dur" "1s") ; over 1 second
    (.setAttribute "attributeName" "cy")
    (.setAttribute "from" 450)
    (.setAttribute "to" 700)
    (.setAttribute "repeatCount" "indefinite")
    (.setAttribute "calcMode" "linear")))

(defn pub-component [{:keys [type listens image monitors]} chan x]
  (let [i (atom (rand-int 100))
        topic (atom (str type "/" (rand-nth monitors) "/" i))
        degree-rotate (atom 0)
        new-topic (fn [chan]
                    (js/setInterval
                       #(do 
                         (put! chan @topic)
                         (d/replace! (sel1 "#topic p") (node [:p @topic]))
                         (->> (reset! i (rand-int 100))
                              (str type "/" (rand-nth monitors) "/")
                              (reset! topic))
                         (rotate-lmax degree-rotate)) 
                       (d/append! (sel1 "#messages svg") (node
                                                          [:circle {:cx x :cy 40 :r 5 :fill "purple" :opacity 1}
                                                           (make-animatex x)
                                                           (make-annimatey)]))
                       
                       (d/append! (sel1 "#messages svg") (node [:circle {:cx x :cy 300 :r 5 :fill "purple" :opacity 1}
                                                                 (make-animate-s-x x)
                                                                 (make-annimate-s-y)
                                                                ]))
                       1000))]

    
    (doto (node
           [:a {:href "#"} type [:img {:src (str img-path image) :width 30 :height 35 :style {:position "absolute" :left (str x "px") :top "15px"}} ]])
      (d/listen! :click #(new-topic chan)))))

(defn sub [listens topic]
  (let []
    (some #{sub} listens)))

(defn sub-component [{:keys [name listens image]} chan x]
  (node [:div {:id name :style {:display "inline" :position "absolute" :left (str x "px") :top "700px"}}  [:li {:style {:padding-right "20px" :padding-left "5px" :display "inline"}} [:img {:src (str img-path image)  :width 30 :height 35}] [:br] name]]))

(defn who-is-listening [topic]
  (let [sub (filter #(contains? % :listens) things)
        
        sensor (second (clojure.string/split topic #"/"))
        l (for [s sub]
                    (if (some #{sensor} (:listens s))
                      (:name s)))
        listeners (filter #(not (nil? %)) l)
        i (atom 0)]
    (.log js/console
          (for [x listeners]
            (case
                (= @i 0) (d/replace! (sel1 "#received p" ) [:p (str x " received message " topic)])
                (> 10 @i) (do
                            (d/append! (sel1 "#received p" ) [:p (str x " received message " topic)])
                            (swap! i inc))
                
                :else (do
                        (d/replace! (sel1 "#received p" ) [:p (str x " received message " topic)])
                        (reset! i 0))
                
                )))))

;;(d/replace! (sel1 ("#received p"))
;;                        (node [:p (str x "received message" topic)])

(defn renderer [things chan type div]
  (let [pub-sub (filter #(contains? % type) things)
        x (atom 35)]
    (for [t pub-sub]
      (do
        (d/append! (sel1 div) (if (= type :monitors)
                                (pub-component t chan @x)
                                (sub-component t chan (+ 50 @x))))
        (swap! x + 85)))))

(defn watch-events! [chan]
  (go-loop []
    (when-let [event (<! chan)]
      (who-is-listening event))
    (recur)))

(def lmax
  (let [top [:g {:transform "translate(37, 50)"}
             [:circle {:r 17.5 :fill "none" :stroke "black" :stroke-width 6}]]
         f [:g {:transform "translate(0, -20)"}
            [:rect {:width 3 :height 5 :fill "black"}]]
        tail [:g {:transform "rotate(18, 0, 20)"}
        [:rect {:width 3 :height 5 :fill "#F6F7E4"}]]
        ]
    [:div#lmax
     [:svg {:viewBox "0 0 250 80"}
      [:g
       [:rect {:x 25 :y 25 :rx 5 :ry 5 :width 25 :height 5 :fill "#a6bddb" :stroke "black" :stroke-width 0.1}]
       [:text {:x 28 :y 28 :font-size 2} "Message Broker"]]

      ;;draw it
      [:g#l {:transform "rotate(0,0,0)"}
       (loop [a (conj tail tail)
              i 0]
         (if (= 19 i)
           (conj top (conj f a))
           (recur (conj tail a) (inc i))))]
      
      ]]))



(set! (.-onload js/window)
      (fn []
        (let [c (doto (chan 100)
                  (watch-events!))]
          (d/append! (sel1 [:#model])
                     [:div#publishers [:div#messages [:svg {:width 800 :height 1000}]]])
          
         ;; (.log js/console (render-subscribers things c))
          (d/append! (sel1 [:#publishers]) [:div#topic [:h2 "Sent Messages"] [:p "Start simulation by clicking on the devices"]])
         
          (d/append! (sel1 [:#model]) lmax)
          (d/append! (sel1 [:#model]) [:div#msg])
          (d/append! (sel1 [:#model]) [:div#subscribers (node [:ul {:style {:padding-left "10px" :list-style-type "none"}}])])
           (d/append! (sel1 [:#subscribers]) [:div#received [:h2 "Received Messages"] [:p "No Messages Received"]])
          (.log js/console (renderer things c :monitors [:#publishers]))
          (.log js/console (renderer things c :listens  "#subscribers ul"))
          (d/append! (sel1 [:#John]) [:p "foo"]))))
