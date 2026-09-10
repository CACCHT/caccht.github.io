# caccht.github.io

The website of **CACCHT** — Creating Annotated Corpora of Classical Hebrew Texts —
published at <https://caccht.github.io>.

CACCHT prepares linguistically annotated editions of ancient Semitic texts and
releases them openly, so they can be used for research and education. The project
is a collaboration of Martijn Naaijer (University of Zurich), Willem van Peursen
(Vrije Universiteit Amsterdam), Oliver Glanz (Andrews University), Christian Canu
Højgaard (Fjellhaug International University College), Martin Ehrensvärd and
Robert Rezetko (University of Copenhagen).

## The datasets

| Corpus | Repository |
| --- | --- |
| The Dead Sea Scrolls | <https://github.com/etcbc/dss> |
| The ETCBC Syriac Corpus | <https://github.com/etcbc/syriac> |
| The Samaritan Pentateuch | <https://github.com/DT-UCPH/sp> |
| The ETCBC Targum Corpus | <https://github.com/ETCBC/targum> |
| The Copenhagen Ugaritic Corpus | <https://github.com/dt-ucph/cuc> |
| The Septuagint | <https://github.com/CenterBLC/MT-LXX> |

All of them are [Text-Fabric](https://annotation.github.io/text-fabric/tf/)
datasets and follow, where possible, the annotation conventions of the
[BHSA](https://etcbc.github.io/bhsa).

## This repository

A static site, served by GitHub Pages. Jekyll is switched off (`.nojekyll`), so
the files are published exactly as they are.

```
index.html          the page
assets/css/site.css styles
assets/js/site.js   script specimen and scroll reveals
assets/*.png        the CACCHT logo and favicons
robots.txt          crawling rules, points at the sitemap
sitemap.xml         the one URL, for search engines
```

To work on it, open `index.html` in a browser, or serve the folder:

```
python -m http.server 8000
```
