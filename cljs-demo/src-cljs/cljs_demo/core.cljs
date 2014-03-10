(ns cljs-demo.core
  (:require
   [dommy.core :as d]
   [cljs.core.async :refer [<! >! put! chan]])
  (:require-macros
   [cljs.core.async.macros :refer [go go-loop]]
   [dommy.macros :refer [node sel1]]))

(def img-path "resources/public/imgs/")

(def things [{:type "env-monitor" :monitors ["pollution" "noise"] :image "glyphicons_001_leaf.png"}
             {:type "personA" :monitors ["crowdflow" "heatbeat"] :listens ["parking"] :image "glyphicons_003_user.png"}
             {:type "personB" :listens ["parking" "pollution" "temprature"] :image "glyphicons_035_woman.png"}
             {:type "car" :monitors ["traffic"] :listens ["parking"] :image "glyphicons_005_car.png"}
             {:type "transport" :monitors ["parking" "traffic"] :image "glyphicons_014_train.png"}
             {:type "weather-st" :monitors ["temprature" "wind"] :image "glyphicons_013_beach_umbrella.png"}
             {:type "camden-la" :listens ["everything"] :image "glyphicons_042_pie_chart.png"}
             {:type "building" :monitors ["energy" "pollution" "parking"] :image "glyphicons_089_building.png"}
             {:type "mobile" :listens ["energy" "crowdflow" "noise" "temprature" "wind"] :image "glyphicons_279_tablet.png"}])

(defn make-animatex [x]
  (doto (.createElementNS js/document "http://www.w3.org/2000/svg" "animate")
    (.setAttribute "dur" "1s") ; over 1 second
    (.setAttribute "attributeName" "cx") ; animate the radius value
    (.setAttribute "from" (+ x 20))
    (.setAttribute "to" 250)
  ;;  (.setAttribute "attributeName" "cy")
  ;;  (.setAttribute "from" -100)
  ;;  (.setAttribute "to" 250)
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

(defn pub-component [{:keys [type listens image monitors]} chan x]
  (let [i (atom ())
          new-topic (fn [chan]
                    (let [t (swap! i #(rand-int 100))
                          topic (str type "/" (rand-nth monitors) "/" t)]
                      (do
                        (put! chan topic)
                        (d/replace! (sel1 [:#topic]) (node [:div#topic [:p topic]]))
                        (d/append! (sel1 "#messages svg") (node
                                                           [:circle {:cx x :cy 40 :r 5 :fill "purple" :opacity 0.5}
                                                            (make-animatex x)
                                                            (make-annimatey)
                                                           ])))))]
    (doto (node
           [:a {:href "#"} type [:img {:src (str img-path image) :width 30 :height 35 :style {:position "absolute" :left (str x "px") :top "15px"}} ]])
      (d/listen! :click #(new-topic chan)))))

(defn render-publishers [things chan]
  (let [pubs (filter #(contains? % :monitors) things)
        x (atom 35)]
    (for [p pubs]
      (do
        (d/append! (sel1 [:#publishers]) (pub-component p chan  @x))
        (swap! x + 85)))))


(defn watch-events! [chan]
  (go-loop []
    (when-let [event (<! chan)]
      (.log js/console event))
    (recur)))
            ;    *2+5 *2+5    

(def lmax
  [:div#lmax
   [:svg {:viewBox "0 0 250 80"}
    [:rect {:x 25 :y 10 :rx 5 :ry 5 :width 25 :height 10 :fill "#a6bddb" :stroke "black" :stroke-width 0.5}]
    [:text {:x 28 :y 15 :font-size 3} "MQTT Broker"]
    [:circle {:cx 40 :cy 50 :r 20 :fill "none" :stroke "#2b8cbe" :stroke-width 4}]]])

(set! (.-onload js/window)
      (fn []
        (let [c (doto (chan)
                  (watch-events!))]
          (d/append! (sel1 [:#model]) [:div#publishers [:div#messages [:svg {:width 800 :height 300}
                                                                       ]]])
          (.log js/console (render-publishers things c))
          (d/append! (sel1 [:#publishers]) [:div#topic [:p "Start Simulation"]])
         
          (d/append! (sel1 [:#model]) lmax)
          (d/append! (sel1 [:#model]) [:p "subscribers"]))))
