abstract class Echo {

    protected abstract onReplay(message: string): string;

    public replay(message: string): string {
        console.log(`DEBUG: message = ${message}`);
        return this.onReplay(message);
    }

}

class SimpleEcho extends Echo {

    protected onReplay(message: string): string {
        return message;
    }

}

class ServerTimeEcho extends Echo {

    protected onReplay(message: string): string {
        return `${new Date().toString()}: ${message}`;
    }

}

const showEchoMessage = function (echo: Echo, message: string): void {
    return console.log(echo.replay(message));
};

showEchoMessage1(new SimpleEcho(), "Hello");
showEchoMessage1(new ServerTimeEcho(), "Hello");

