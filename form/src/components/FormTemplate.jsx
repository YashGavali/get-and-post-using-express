import { useEffect } from 'react';
import { useState } from 'react';
import styles from './FormTemplate.module.css';
import axios from 'axios';
import config from '../config';

const FormTemplate = () => {
  const [state, setState] = useState('');
  const [message, setMessage] = useState('');
  const [input, setInput] = useState({
    name: '',
    email: '',
    number: '',
  });

  console.log(input);

  useEffect(() => {
    axios
      .get(`${config.url}`)
      .then((res) => {
        setState(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  //Handlers

  const handleChangeEvent = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const buttonClickHandler = (e) => {
    axios
      .post(`${config.url}/data`, input)
      .then((res) => {
        setMessage(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={styles.formContainer}>
      <h4>{state}</h4>
      <div className={styles.formControl}>
        <div>Name</div>
        <div>
          <input type="text" name="name" onChange={handleChangeEvent} />
        </div>
      </div>
      <div className={styles.formControl}>
        <div>Email</div>
        <div>
          <input type="text" name="email" onChange={handleChangeEvent} />
        </div>
      </div>
      <div className={styles.formControl}>
        <div>Number</div>
        <div>
          <input type="text" name="number" onChange={handleChangeEvent} />
        </div>
      </div>
      <button onClick={buttonClickHandler}>Done</button>

      <h6>{message}</h6>
    </div>
  );
};

export default FormTemplate;
