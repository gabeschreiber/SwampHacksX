from flask import Flask, request, jsonify, render_template
import openai

app = Flask(__name__)

@app.route('/')
def main():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)