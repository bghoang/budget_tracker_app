import { FunctionComponent } from "react";
import styles from "./SpendingCard.module.css";

interface Props {
  key: number;
  data: any;
}

const SpendingCard: FunctionComponent<Props> = (data) => {
  console.log(data);
  const spendingData = {
    amount: 50.0,
    bank: "Bank of America",
    reason: "Eating dinner",
    cardType: "Debit",
    balance: 5000,
    image:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAMAAABlApw1AAAAwFBMVEX////jGDcBIWn98fPjGjn//P3+9Pb5zNPlKkfoQFr85+rmMU3kI0Dudon3v8f73+T4xc3whpb61Nr2tr/y9PfvfY/0o6/nOFLqT2fsYHbxjp374eX97O/sZXrzmqfrWnDucoUPLXHoRV49VYwfO3vs7vSyvNKirsj1rLdugKkqRYHxi5vnO1b62N3ta3+Qnr7X3Odkd6NLYZWDk7Z3iK6xu9HK0eAjP31HXpJXbJybqMSLmrsYNXfW2+cKKW5zhKyPsCKaAAAHoUlEQVR4nO2ba3eiWgyGWwHvIIiioIK1tVJvvbdTp6fz///VUfBOdiLVgl0rz6dZa7Bkb94kb7Z4ccEwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMOcBEmrF5pOTkk7ju9Rde3SZcB4alXSjiYmbd3oyZdblJtu9fc8iGI9fwkwruvZtEM7DKWYszolaA2NqflL1rBIYMODHkSjrv2aNVwU/U4DWoNxhoVJtKtZvQ6tYTyaJBoeQdFtNuyRJsH/m9WMcXQJZc8qJhulCEXrLrVemlqCWqloKrCGvKqlL6WiW9gJqmfkYDVlzU45uoaCm+pjUDQbKDTzWgmLqWU1gcfQ0RKOes3EKETjWYnJh3c2ZwApXTDScRqaDTar1c5OtTb0KclqyrtXlsfTXNKxL1GqbhMQ9noNXThJq+pGeHnbqqSbyS2zizyIcb0KfWiZ+j1DB59S0kimKsyGS9mzWsBnsn7nrPqxokOFfi2lcwpViJKri7XUswRtOklqs8f7B/QKyeyCk8CCxoG1Usk53R/pDP3ZMJPJfF0/39awy4quJwuWUFbBhN6m5YdKtE++hNr9e2bF+x2+hqpISj0TvUfL8jY12Ttpa6j93YQfcPM06yPXt/2oZyh30ZAqzl5HkT39dOEPM/tcvWALmKOrO/E0HMz/t1wP6of2SZZQG0TDv3kmwg+i2iip5yI1SAJtasiUzBoSIPzPvweEH4TmBs7Nw1y/MGGWQuocdxrzev398IMlWAXMqLXdnqhkrRkfUZDePqLh/4PCfxBXJWT/sMa3il4VjBaH8PAYCT/zCDWyh7ur4QwtrACK5lHRzw35EfLpv1xFwn96g8J/DC58f8Gb9C5tR+z+Qsod8xijqty/R8K/vgUu7L98rtX1CK0PYkJqpwk62MO5jebuzT1wXe3+c+eiD2iN+1S7yAy0oKQe2YX/i+buF5S7ygB4TAMiGXShVQqRm/6RvrX/Lyr+j/+AC4HHFDyqAfLHTeBYYps8PMDFAWhcQygk4DGFmXAnTmaTKDw9hz4kyuJHkm9/IhFdPQOi6D9/geFf3Ym7nIbvvuyZZNFUckZDVsX53b+LhvQBbejsBt5+8OLDwj/A9VSccGrNO4KVzqI5OXwFrgMeU8AfcQ3SbVz6Bhm+5Nub4gUOFm9PUUFAnrn/AocPZkpIdYqGXzJI6Vf3D/Q6+yuuAWFdQ41pAKsHzJSQoooWzpJDlc2564j+hfJo5wz5FTDNM+BvPUQfUwDokQIkQzjmB+G7lGEQuo6xvwkLKIlQPtaeoy0ieFRC8SuW+LRoToMMHx0X7FBHyuwzEtI7JOg3uHMh6tHR0lMakeETrqPszHX0FlVP5hFI3to/WD1PQvW00NwtG1T4Omm4589QAxzBEFLELbDODGYcsiNM/HKdspuU6whpLgrq7ceOtKFmCrU40aNa3r+H3bdD+U3KdQTk17b14WVdHOHtj7Y44bUBkw66bcSYqxBtO2S845xqs1Aid5DxAWZL0bVhAA6Wew1f8LEVB4Xf8/f9RG1wDW8p0CPw7dcw9eQdIncJ1xEiMH6vMdQvtJ1FFbmxPCWOqHO46wj/SJyjX6jIznkXbr+Pjbs94s6E61jufoyBUxEYN2HxqWDPP2/hhl9CC+8SO868LGi9n8La72IRIIPIAsJ1LMOPddw7g53PH1HrnWC1m1IP7jpCqPK7Sx82nl9/RR9wkdpZFg1RS3DXsdwC/OuRSPyC4ik6vJpg6rfxgSvr0OIfWzHf81KAk12kd1lICCULv5VJHTMeMvVARHJYmL1FzDl08IGxgrqOAFn97js5u0dvwuzFan8JV65yQOmMzL8x6G/NYKK5ReoiN+/ie4d71oB4pSfKaty8EfXeHKJgwrehriOk5B7/kkKQCk+i3usgzX+K+zYs8UPk+mleZhkMnwX70EJ6F6H+Kt25iOobA1HxNJHs7aDOIYuODAEFam44mqwhvnser/05cvvLxo+/3lJBgvDQ7VcM0jV7P/9iL1L8Ceejk7Vz/OPqmW+i+PY91PNK5PafqvZgtBD5dFHXhbWN5foTeAcTqT55tHjS6s+foHNRZJEoPHRop4sPNfSfBE14e9nAtk/BRp6A0s8nb4CoiZZQ31UhTwu7ib0FC++ljTpP0vkc815NfKJqlh3s+iLmuYOPqwm/WLpfTxro/unQ72i2KaTwIwJ9+xzHw+SLdb2Qeiq/zGqv5xF5hFUf9Lwore0PWfoh3Pn7RPYmrv5tgoGmiVnPLDU2NuKdV50axcqrmH6rlPNMrvaLQIs/JR9i7kkbUj743JM6E0I+spt2hDiUfJLw/UeQrRPyQXM/fbCRbUE+IeP8XbADowX43JM+2Hnj5cK4nvevstrE90XEmWPqVIlzB+9MfsgtQLGIwffM5XPRwqv/ucvnAj8yxY3ruYDMX/Uzl88KQRcon3nz2gKUUeG8vc8uStQJeWfwe9w4+HvVFD10PEt2hslQ/tLvWoS0ef2jsZC/5KjH/8AkWUar6h+YB8t1nQS+ezkpZtCWw69sFCenWv5vqkQLFokwWv7btXLmAb/yOTMke31w0jasempniAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAH/A/LgkVzgLUmPAAAAAElFTkSuQmCC",
  };
  return (
    <div className={styles.containter}>
      <div className={styles.row}>
        <div className={styles.spendingHeader}>
          <img src={spendingData.image} alt="logo" />
          <h1 className={styles.bank}>{spendingData.bank}</h1>
        </div>
        <div className={styles.spendingInfo}>
          <p className={styles.amount}>${spendingData.amount}</p>
          <p className={styles.reason}>{spendingData.reason}</p>
          <p className={styles.cardType}>{spendingData.cardType}</p>
          <p className={styles.balance}>{spendingData.balance}</p>
        </div>
      </div>
    </div>
  );
};

export default SpendingCard;
