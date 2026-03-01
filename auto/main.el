;; -*- lexical-binding: t; -*-

(TeX-add-style-hook
 "main"
 (lambda ()
   (TeX-add-to-alist 'LaTeX-provided-class-options
                     '(("article" "")))
   (TeX-add-to-alist 'LaTeX-provided-package-options
                     '(("amsmath" "") ("amssymb" "") ("amsthm" "") ("geometry" "") ("graphicx" "") ("hyperref" "") ("xcolor" "")))
   (TeX-run-style-hooks
    "latex2e"
    "article"
    "art10"
    "amsmath"
    "amssymb"
    "amsthm"
    "geometry"
    "graphicx"
    "hyperref"
    "xcolor")
   (TeX-add-symbols
    '("jrs" 1))
   (LaTeX-add-labels
    "sec:background"
    "sec:framework"
    "sec:implementation"
    "sec:examples")
   (LaTeX-add-bibliographies
    "references"))
 :latex)

