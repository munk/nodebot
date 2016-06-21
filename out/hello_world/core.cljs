(ns hello-world.core
  (:require [cljs.nodejs :as nodejs]))

(nodejs/enable-util-print!)
  
(def five (js/require "johnny-five"))
(def board (.Board five))


(defn -main [& args]
  (.on board "ready" 
    (fn [] 
      (this-as this
        (let [led (.Led five 11)]
          (.inject (.-repl this) (clj->js {:led led}))))))
  (println "Hello world!"))

(set! *main-cli-fn* -main)

