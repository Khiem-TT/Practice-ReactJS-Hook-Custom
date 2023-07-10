import {useState} from "react";

export function useClock() {
    const [time, setTime] = useState('');
    const [ampm, setampm] = useState('');
    const updateTime = () => {
        let dateInfo = new Date();
        let hours = 0;
        if (dateInfo.getHours() === 0) {
            hours = 12;
        } else {
            hours = dateInfo.getHours();
        }
        let minutes
            = dateInfo.getMinutes() < 10
            ? parseInt('0' + dateInfo.getMinutes())
            : dateInfo.getMinutes();
        let seconds
            = dateInfo.getSeconds() < 10
            ? parseInt('0' + dateInfo.getSeconds())
            : dateInfo.getSeconds();
        let ampm
            = dateInfo.getHours() >= 12
            ? 'PM'
            : 'AM';
        setTime(`${hours}:${minutes}:${seconds}`);
        setampm(ampm);
    }
    setInterval(() => {
        updateTime();
    }, 1000);
    return [time, ampm];
}