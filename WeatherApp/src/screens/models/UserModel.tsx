import { OperationResult } from "./ResponseModel";

interface UserData {
    firstName: string;
    lastName: string;
    email: string;
}

interface UserRegData extends UserData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

const emailRegex: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const passwordRegex: RegExp = /^[A-Za-z0-9~!@#$%^&*()_+]{6,}$/;
const humanNameBlacklistPattern = /[@!#^&*_]+/;

//Return operation result with result = true & user data if login successful, otherwise return operation result with result = false (& appropriate error if possible)
const firebaseUserLogin = async (email: string, password: string) : Promise<OperationResult<UserData>> => {
    try {
        //Add firebase library functions here & replace dummyAsync later
        const dummyAsync = async (email: string, password: string) : Promise<boolean> => {
            const dummyEmail = 'test';
            const dummyPassword = 'test';
        
            if (email === dummyEmail && password === dummyPassword) {
                return true;
            } else {
                return false;
            }
        }
        const result = await dummyAsync(email, password);
        const response: OperationResult<UserData> = {result: result};
        if (result === true) {
            const userData = await firebaseGetUserInfo(email);
            //For passing into context later or whatever
            response.data = userData;
        }else {
            //Depends on what the library returns
            response.error = "";
        }
        return response;
    }catch (e) {
        console.error(e);
        throw e;
    }
}

//Return operation result with result = true if login successful (no user data, assuming user is not automatically logged in on success), otherwise return operation result with result = false (& appropriate error if possible)
const firebaseUserRegister = async ({firstName, lastName, email, password}: UserRegData) : Promise<OperationResult<UserData>> => {
    if (!nameIsValid(firstName) || !nameIsValid(lastName) || !emailIsValid(email) || !passwordIsValid(password)) {
        throw new Error("Invalid user info");
    }

    try {
        //Add firebase library functions here & replace dummyAsync later
        const dummyAsync = async (email: string, password: string) : Promise<boolean> => {
            return true;
        }
        const result = await dummyAsync(email, password);
        const response: OperationResult<UserData> = {result: result};
        if (result === true) {
            //Not checking for anything since user can log in just fine without personal info, can always add something to call set user info() later
            const userData = await firebaseSetUserInfo({email, firstName, lastName});
        }else {
            //Depends on what the library returns
            response.error = "";
        }
        return response;
    }catch (e) {
        console.error(e);
        throw e;
    }
}

const firebaseGetUserInfo = async (email: string) : Promise<UserData> => {
    //Add firebase function to fetch personal info doc with matching email here later
    let firstName = "Do some async stuff to define it";
    let lastName = "Do some async stuff to define it";
    return {firstName, lastName, email};
}

const firebaseSetUserInfo = async ({email, firstName, lastName}: UserData) : Promise<boolean> => {
    //Add firebase function to set personal info doc if email registration is successful
    return true;
}

const nameIsValid = (name: string) : boolean => {
    if (name.trim().length === 0) {
        return false;
    }
    return !humanNameBlacklistPattern.test(name);
}

const emailIsValid = (email: string) : boolean => {
    return emailRegex.test(email);
}

/*
Valid password is currently defined as
-alphanumeric characters, ~!@#$%^&*()_+
-at least 6 characters
*/
const passwordIsValid = (password: string) : boolean => {
    return passwordRegex.test(password);
}
export {UserData, UserRegData, firebaseUserLogin, firebaseUserRegister, nameIsValid, emailIsValid, passwordIsValid};