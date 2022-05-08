import create from "zustand";

type IState = {
    counter: number
    setCounter: (num: number) => void

};

const appController = create<IState>((set, get) => ({
    counter: 0,
    setCounter: (num: number) => {
        set({counter: num})
    }
}));

export default appController;
