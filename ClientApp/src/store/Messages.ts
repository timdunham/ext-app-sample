export const FormatMessage = (message: Message): string => {
    const regex = /,/gi;
    return JSON.stringify(message)
        .replace(regex, ",\n  ")
        .replace("{", "{\n  ")
        .replace("}", "\n}");
}

export type DisplayInformationPaneMessage = { action: "displayInformationPane", pane: string, name?: string };
export type SetScreenOptionMessage = { action: "setScreenOption", screenOptionId: string; value: string };
export type FocusScreenOptionMessage = { action: "focusScreenOption", screenOptionId: string };
export type ConfigureMessage = { action: "configure" };
export type FinishConfigurationMessage = { action: "finishConfiguration" };
export type ProcessingMessage = { action: "processing", isProcessing: boolean, delay?: number, message?: string };
export type SaveOutputFileMessage = { action: "saveOutputFile", file: File };

export type Message =
    DisplayInformationPaneMessage |
    SetScreenOptionMessage |
    FocusScreenOptionMessage |
    ConfigureMessage |
    FinishConfigurationMessage |
    ProcessingMessage |
    SaveOutputFileMessage;

export const messageCreators = {
    displayInformationPane: (pane: string, name?: string) => ({ action: "displayInformationPane", pane, name } as DisplayInformationPaneMessage),
    configure: () => ({ action: "configure" } as ConfigureMessage),
    finishConfiguration: () => ({ action: "finishConfiguration" } as FinishConfigurationMessage),
    setScreenOption: (screenOptionId: string, value: string) => ({ action: "setScreenOption", screenOptionId, value } as SetScreenOptionMessage),
    focusScreenOption: (screenOptionId: string) => ({ action: "focusScreenOption", screenOptionId }) as FocusScreenOptionMessage,
    processing: (isProcessing: boolean, delay?: number, message?: string) => ({ action: "processing", isProcessing, delay, message } as ProcessingMessage),
    saveOutputFile: (file:File) => ({ action: "saveOutputFile", file } as SaveOutputFileMessage)
}

