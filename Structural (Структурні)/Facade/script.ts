class UptadeVersionIOS{

    protected requestUpdate: RequestUpdate;
    protected installationUpdate: InstallationUpdate;
    protected startNewVersion: StartNewVersion;

    constructor(requestUpdate?: RequestUpdate, installationUpdate?: InstallationUpdate, startNewVersion?: StartNewVersion){
        this.requestUpdate = requestUpdate || new RequestUpdate();
        this.installationUpdate = installationUpdate || new InstallationUpdate();
        this.startNewVersion = startNewVersion || new StartNewVersion();
    }

    public updateProcess(): string{
        let result = 'Процес ононвлення системи:\n\n';
        result += this.requestUpdate.startUptade();
        result += this.requestUpdate.startUptade2();
        result += this.installationUpdate.startInstall();
        result += this.installationUpdate.startInstall2();
        result += this.startNewVersion.goWokr();
        result += this.startNewVersion.goWokrNews();

        return result;
    }

}

class RequestUpdate{

    public startUptade(): string{
        return 'Подати запит на оновлення системи;\n'
    }

    public startUptade2(): string{
        return 'Запит підтверджено;\n'
    }

}

class InstallationUpdate{

    public startInstall(): string{
        return 'Загрузити та оновити систему;\n'
    }

    public startInstall2(): string{
        return 'Систему оновлено;\n'
    }

}

class StartNewVersion{

    public goWokr(): string{
        return 'Введіть пін-код;\n'
    }

    public goWokrNews(): string{
        return 'Не бажаєте ознайомитись з оновленням?\n'
    }

}

function clientCode(uptadeVersionIOS: UptadeVersionIOS){
    console.log(uptadeVersionIOS.updateProcess())
}

const uptadeVersionIOS = new UptadeVersionIOS();
clientCode(uptadeVersionIOS);
