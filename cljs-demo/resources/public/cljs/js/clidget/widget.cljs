(ns clidget.widget
                                        
                                                              

         (:require [cljs.core.async :as a])
         (:require-macros [cljs.core.async.macros :refer [go-loop]]
                          [clidget.widget :refer [with-widget-cache]]))

(def ^:dynamic ^:private *context* nil)

(defn- get-widget-key [system keys-binding]
  (select-keys system (map :val-key keys-binding)))

(defn- resolve-state [system keys-binding]
  (->> (for [{:keys [val-key atom-key]} keys-binding]
         [val-key (or (get system val-key)
                      (some->> atom-key
                               (get system)
                               deref))])
       (into {})))

(defn get-cached-widget [{:keys [from-cache !to-cache]} widget-key]
  (when from-cache
    (let [cached-widget (get from-cache widget-key)]
      (when (and cached-widget !to-cache)
        (swap! !to-cache assoc widget-key cached-widget)
        cached-widget))))

(defn cache-widget! [widget !widget-cache widget-key]
  (when !widget-cache
    (swap! !widget-cache assoc widget-key widget)))

(defn- init-locals [system locals-binding]
  (reduce (fn [system [atom-key init-fn]]
            (assoc system
              atom-key (init-fn)))
          system
          locals-binding))

(defn add-watches [system keys-binding render-ch]
  (doseq [{:keys [val-key atom-key]} keys-binding]
    (when-let [watched-atom (some->> atom-key
                                     (get system))]
      (add-watch watched-atom (gensym "clidget")
                 (fn [_ _ _ new-value]
                   (a/put! render-ch (assoc system val-key new-value)))))))

(defn make-render-ch [render-widget!]
  (let [ch (a/chan (a/sliding-buffer 1))]
    (go-loop []
      (when-let [system (a/<! ch)]
        (render-widget! system)
        (recur)))
    ch))

                                           
                              
                                                 
                                                  
                                                     
                

(defn re-render-widget [{!parent-widget-cache :!to-cache} widget-key system keys-binding render-widget-fn]
  (let [!widget (atom nil)
        !widget-cache (atom {})
        render-widget! (fn [system]
                         (doto (with-widget-cache !widget-cache
                                 (render-widget-fn (-> system
                                                       (merge (resolve-state system keys-binding))
                                                       (dissoc :clidget/widget-key
                                                               :clidget/widget-type))))
                          
                           (cache-widget! !parent-widget-cache widget-key)

                           (#(when-let [current-widget @!widget]
                               ;; This is called when an atom that
                               ;; we're watching changes - our parent
                               ;; may not have updated.
                               (.. current-widget -parentNode (replaceChild % current-widget))))
                          
                           (->> (reset! !widget))))
        render-ch (make-render-ch render-widget!)]

    (add-watches system keys-binding render-ch)
    (reset! !widget (render-widget! system))))

(defn updated-widget [system keys-binding locals-binding render-widget-fn]
  ;; this fn is called whenever a parent-widget asks us to reload

  (let [widget-key (get-widget-key system keys-binding)]
    (or (get-cached-widget *context* widget-key)
        (re-render-widget *context*
                          widget-key
                          (-> system
                              (init-locals locals-binding))
                          keys-binding
                          render-widget-fn))))

     
                                  
                         
                                
                                                  
            

     
                               
                                     
                                    
                  

     
                                                           
                                      
                                    
                                     
                                                            
                                                                    
                                                                    
                                            
                                                                               
                                                     
                                       

;;;;;;;;;;;; This file autogenerated from src/clidget/widget.cljx