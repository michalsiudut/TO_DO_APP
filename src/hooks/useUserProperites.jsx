import { useLocalStorageState } from "./useLocalStorageState";



export function useUserProperties() {

    const [userName, setUserName] = useLocalStorageState("userName", "No data");
    const [userAge, setUserAge] = useLocalStorageState("userAge", "No data");


    const setUserAgeHandler = (age) => {
        setUserAge(age);
    }

    const setUserNameHandler = (name) => {

        setUserName(name);
    }

    return {
        setUserAgeHandler, setUserNameHandler, userAge, userName
    }

}