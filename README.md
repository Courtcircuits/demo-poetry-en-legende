# Demo Poetry - DO3
----
## Sommaire :
- [Pré-requis](##-pré-requis)
- [Installer les dépendances](##-installer-les-dépendances)
- [Pour aller plus loin](##-pour-aller-plus-loin)


## Pré-requis :
- Installer poetry
```bash
curl -sSL https://install.python-poetry.org | python3 -
```
- Installer make
```bash
make --version # pour vérifier si make est présent sur le système
# si ce n'est pas le cas
su - # cassedédi à MFA
apt install build-essentials
```
----
## Installer les dépendances
### Avec make
```bash
make install
```
### Avec poetry
```bash
poetry install
```
## Lancer le projet
### Avec make
```bash
make run
```
### Avec poetry
```bash
poetry run python poetry_project/main.py
```
## Pour aller plus loin
### Les tests unitaires
1. Lance la commande suivante :
```
make test
```
2. Analyse le Makefile pour comprendre ce que fait la commande et pourquoi elle ne fonctionne pas
*Indice : regarde aussi le fichier `pyproject.toml`, tu devras peut être utiliser la commande `... add ...`*
3. Fait en sorte que le test passe au vert
4. Enfin rends toi sur cette page [poetry - managing dependencies](https://python-poetry.org/docs/managing-dependencies/#optional-groups) et trouve un moyen d'installer pytest avec la commande : 
```bash
poetry install --with docs
```
*Indice : tu vas surement devoir modifier le fichier `pyproject.toml`*
## Notes
- **C'est tarpin important de lire la doc de poetry -> elle est là le sang : [doc poetry](https://python-poetry.org/docs/)**
- **Si il y a un problème demande à Tristan ou à quelqu'un qui a fini**

