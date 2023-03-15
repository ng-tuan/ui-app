import { useContext } from "react";
import { StateContext } from "./context";

export function useStateHooks() {
    const {source} = useContext(StateContext)

    return {
        source
    }
}