"use strict";
class UptadeVersionIOS {
    constructor(requestUpdate, installationUpdate, startNewVersion) {
        this.requestUpdate = requestUpdate || new RequestUpdate();
        this.installationUpdate = installationUpdate || new InstallationUpdate();
        this.startNewVersion = startNewVersion || new StartNewVersion();
    }
    updateProcess() {
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
class RequestUpdate {
    startUptade() {
        return 'Подати запит на оновлення системи;\n';
    }
    startUptade2() {
        return 'Запит підтверджено;\n';
    }
}
class InstallationUpdate {
    startInstall() {
        return 'Загрузити та оновити систему;\n';
    }
    startInstall2() {
        return 'Систему оновлено;\n';
    }
}
class StartNewVersion {
    goWokr() {
        return 'Введіть пін-код;\n';
    }
    goWokrNews() {
        return 'Не бажаєте ознайомитись з оновленням?\n';
    }
}
function clientCode(uptadeVersionIOS) {
    console.log(uptadeVersionIOS.updateProcess());
}
const uptadeVersionIOS = new UptadeVersionIOS();
clientCode(uptadeVersionIOS);
