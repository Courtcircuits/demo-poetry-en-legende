.PHONY: install run

install:
	poetry install

run:
	poetry run python poetry_project/main.py

test:
	poetry run pytest tests
