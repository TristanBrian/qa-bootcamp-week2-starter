// Profile validator: safely handle optional API response fields

type UserProfile = {
    id: number;
    username: string;
    settings?: {
        notifications?: boolean;
    };
};
const userOne: UserProfile = {
    id: 1,
    username: "Brian",
    settings: {
        notifications: true
    }
};

const userTwo: UserProfile = {
    id: 2,
    username: "Alex"
};

const userThree: UserProfile = {
    id: 3,
    username: "Jordan",
    settings: {}
};

function isNotified(user: UserProfile): boolean {
    return user.settings?.notifications ?? false;
}

console.log(userOne.username, isNotified(userOne));
console.log(userTwo.username, isNotified(userTwo));
console.log(userThree.username, isNotified(userThree));