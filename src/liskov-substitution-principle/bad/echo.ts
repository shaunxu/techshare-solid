class NormalEcho {

    public replay(message: string): string {
        console.log(`DEBUG: message = ${message}`);
        return message;
    }

}

class ExtendedEcho extends NormalEcho {

    public replay(message: string): string {
        return message;
    }

}

const showEchoMessage1 = function (echo: NormalEcho, message: string): void {
    return console.log(echo.replay(message));
};

console.log("NormalEcho");
showEchoMessage1(new NormalEcho(), "Hello");

console.log("ExtendedEcho");
showEchoMessage1(new ExtendedEcho(), "Hello");
