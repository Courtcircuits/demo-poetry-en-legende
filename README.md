# Demo Poetry - DO3
----
## Sommaire :
- [[#Pré-requis :|Pré-requis :]]
- [[#Installer les dépendances|Installer les dépendances]]
	- [[#Installer les dépendances#Avec make|Avec make]]
	- [[#Installer les dépendances#Avec poetry|Avec poetry]]
- [[#Lancer le projet|Lancer le projet]]
	- [[#Lancer le projet#Avec make|Avec make]]
	- [[#Lancer le projet#Avec poetry|Avec poetry]]
- [[#Pour aller plus loin|Pour aller plus loin]]
	- [[#Pour aller plus loin#Les tests unitaires|Les tests unitaires]]
- [[#Notes|Notes]]
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
*Indice : regarde aussi le fichier `pyproject.toml`*
3. Fait en sorte que le test passe au vert
4. Enfin rends toi sur cette page [poetry - managing dependencies](https://python-poetry.org/docs/managing-dependencies/#optional-groups) et trouve un moyen d'installer pytest avec la commande : 
```bash
poetry install --with docs
```
*Indice : tu vas surement devoir modifier le fichier `pyproject.toml`*
## Notes
- **C'est tarpin important de lire la doc de poetry -> elle est là le sang : [doc poetry](https://python-poetry.org/docs/)**
- **Si il y a un problème demande à Tristan ou à quelqu'un qui a fini**

