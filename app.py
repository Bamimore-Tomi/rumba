from flask import Flask, render_template
from flask_socketio import SocketIO, emit

app = Flask(__name__)
socketio = SocketIO(app)

@app.route('/')
def chat():
    return render_template('chat.html')
    #return "<h1>Wassup with you</h1>"
@socketio.on('my event')
def handle_my_custom_event(json):
    print('received json: ' + str(json))

if __name__ =="__main__":
    socketio.run(app,debug=True)