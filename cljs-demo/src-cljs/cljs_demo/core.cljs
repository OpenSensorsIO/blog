(ns cljs-demo.core
  (:require
   [dommy.core :as d]
   [cljs.core.async :refer [<! >! put! chan]])
  (:require-macros
   [cljs.core.async.macros :refer [go go-loop]]
   [dommy.macros :refer [node sel1]]))

(def img-path "resources/public/imgs/")

(def things [{:type "tree" :monitors ["pollution" "noise"] :image "glyphicons_001_leaf.png"}
             {:type "personA" :monitors ["crowdflow" "heatbeat"] :listens ["parking"] :image "glyphicons_003_user.png"}
             {:type "personB" :listens ["parking" "pollution" "temprature"] :image "glyphicons_035_woman.png"}
             {:type "car" :monitors ["traffic"] :listens ["parking"] :image "glyphicons_005_car.png"}
             {:type "transport" :monitors ["parking" "traffic"] :image "glyphicons_014_train.png"}
             {:type "weather-station" :monitors ["temprature" "wind"] :image "glyphicons_013_beach_umbrella.png"}
             {:type "camden-la" :listens ["everything"] :image "glyphicons_042_pie_chart.png"}
             {:type "building" :monitors ["energy" "pollution" "parking"] :image "glyphicons_089_building.png"}
             {:type "mobile" :listens ["energy" "crowdflow" "noise" "temprature" "wind"] :image "glyphicons_279_tablet.png"}])

(defn pub-component [{:keys [type listens image monitors]} chan]
  (let [i (atom ())
        new-topic (fn [chan]
                    (let [t (swap! i #(rand-int 100))
                          topic (str type "/" (rand-nth monitors) "/" t)]
                      (do
                        (put! chan topic)
                        (d/replace! (sel1 [:#topic]) (node [:div#topic [:p topic]]))
                        (d/append! (sel1 [:#connector]) (node
                                                         [:circle {:cx 35 :cy 40 :r 5 :fill "purple" :opacity 0.5}
                                                          [:animate {:attributeName "cx" :from 35 :to 100 :dur "5s"}]])))))]
    (doto (node
           [:a {:href "#"} [:img {:src (str img-path image) :width 30 :height 35}]])
      (d/listen! :click #(new-topic chan)))))

(defn render-publishers [things chan]
  (let [pubs (filter #(contains? % :monitors) things)]
    (for [p pubs]
      (d/append! (sel1 [:#publishers]) (pub-component p chan)))))


(defn watch-events! [chan]
  (go-loop []
    (when-let [event (<! chan)]
      (.log js/console event))
    (recur)))
            ;    *2+5 *2+5    

(def lmax
  [:div#lmax
   [:svg {:viewBox "0 0 250 80"}
    
    [:rect {:x 18 :y 5 :rx 5 :ry 5 :width 25 :height 10 :fill "#a6bddb" :stroke "black" :stroke-width 0.5}]
   [:text {:x 20 :y 10 :font-size 3} "MQTT Broker"]
    
    [:circle {:cx 30 :cy 40 :r 20 :fill "none" :stroke "#2b8cbe" :stroke-width 4}]]])

(set! (.-onload js/window)
      (fn []
        (let [c (doto (chan)
                  (watch-events!))]
          (d/append! (sel1 [:#model]) [:div#publishers])
          (.log js/console (render-publishers things c))
          (d/append! (sel1 [:#publishers]) [:div#topic [:p "Start Simulation"]])
          (d/append! (sel1 [:#model]) (node [:svg#connector
                                            (for [x1 [35 105 175 245  315 385]]
                                              [:line {:x1 x1 :y1 40 :x2 220 :y2 110 :stroke "black" :stroke-width 2}])]))
          (d/append! (sel1 [:#model]) lmax)
          (d/append! (sel1 [:#model]) [:p "subscribers"]))))
