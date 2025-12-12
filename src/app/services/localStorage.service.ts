export const StorageService = {
    saveUserId(userId: string): void {
        localStorage.setItem('userId', userId);
    },
    getUserId(): string | null {
        return localStorage.getItem('userId');
    },
    clearUserId(): void {
        localStorage.removeItem('userId');
    }
}