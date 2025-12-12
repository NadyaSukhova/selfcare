
export const StorageService = {
    saveUser(userDocSnap: any): void {
        localStorage.setItem('userId', userDocSnap.userId);
        localStorage.setItem('nickName', userDocSnap.nickName);
    },
    getUserId(): string | null {
        return localStorage.getItem('userId');
    },
    clearUser(): void {
        localStorage.removeItem('userId');
        localStorage.removeItem('nickName');
    }
}