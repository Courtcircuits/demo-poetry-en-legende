from flask import Flask, send_from_directory

app = Flask(__name__, static_folder='presentation/build', static_url_path='')


@app.route('/')
def index():
    return send_from_directory('presentation/build', 'index.html')


if __name__ == '__main__':
    app.run(debug=True)
