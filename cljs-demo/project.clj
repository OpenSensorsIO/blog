(defproject cljs-demo "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-2173"]
                 [org.clojars.ideal-knee/dommy "0.1.3-SNAPSHOT"]
                 [org.clojure/core.async "0.1.267.0-0d7780-alpha"]
                 [ring "1.2.1"]]

  :source-paths ["src" "src-cljs"]
  :plugins [[lein-cljsbuild "1.0.0"]]
  :cljsbuild {
              :builds [{
        ; The path to the top-level ClojureScript source directory:
                        :source-paths ["src-cljs"]
                                        ; The standard ClojureScript compiler options:
        ; (See the ClojureScript compiler documentation for details.)
        :compiler {
                   :output-dir "../cljs-demo/resources/public/cljs/js"
                   :output-to "../cljs-demo/resources/public/cljs/js/main.js"
                   :source-map "../cljs-demo/resources/public/cljs/js/main.js.map"
                   :optimizations :simple}}]})
