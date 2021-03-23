import React, { useEffect, useState } from 'react';
import JoinPresenter from './JoinPresenter';
import axios from 'axios';
import { useHistory } from 'react-router';
import store from '../../store';

const JoinContainer = () => {
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const [emailHost, setEmailHost] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [pnum, setPnum] = useState('');

  const history = useHistory();
  useEffect(() => {
    if (store.getState().user) {
      history.push({
        pathname: '/',
      });
    }
  }, [history]);

  const props = { name, id, email, password, password2, pnum, emailHost };

  const onChange = (e) => {
    if (!e.target) {
      setEmailHost(e.value);
      setEmail(`${email}${e.value}`);
    } else {
      if (e.target.name === 'name') {
        setName(e.target.value);
      } else if (e.target.name === 'id') {
        setId(e.target.value);
      } else if (e.target.name === 'email') {
        setEmail(`${e.target.value}${emailHost}`);
      } else if (e.target.name === 'password') {
        setPassword(e.target.value);
      } else if (e.target.name === 'password2') {
        setPassword2(e.target.value);
      } else if (e.target.name === 'pnum') {
        setPnum(e.target.value);
      }
    }
  };

  const JoinProcess = async () => {
    await checkId();
  };
  const checkId = async (e) => {
    await axios
      .post(`${process.env.REACT_APP_SERVER_PATH}/join/check/id`, { id })
      .then(() => checkEmail())
      .catch((err) => alert(err.response.data.message));
  };
  const checkEmail = async (e) => {
    await axios
      .post(`${process.env.REACT_APP_SERVER_PATH}/join/check/email`, { email })
      .then(() => requestCreateUser())
      .catch((err) => alert(err.response.data.message));
  };

  const requestCreateUser = async (e) => {
    await axios
      .post(`${process.env.REACT_APP_SERVER_PATH}/join`, { name, id, password, email, pnum })
      .then(async () => {
        await alert('회원가입을 축하드립니다!');
        axios
          .post(`${process.env.REACT_APP_SERVER_PATH}/auth/login`, { id, password }, { withCredentials: true })
          .then(async (result) => {
            await store.dispatch({ type: 'LOGIN', user: { ...result.data } });
            history.push({ pathname: '/' });
            window.scrollTo(0, 0);
          })
          .catch((err) => console.error(err.response));
      })
      .catch((err) => console.error(err));
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    // 필수 약관에 동의하였는지 확인
    const checkboxs = document.getElementsByClassName('necessary_checkbox');
    for (let checkbox of checkboxs)
      if (!checkbox.checked) {
        alert('필수 약관에 모두 동의해주세요');
        return;
      }
    // 입력한 비밀번호가 같은지 확인
    if (password !== password2) {
      alert('입력한 비밀번호가 서로 다릅니다.');
      return;
    }
    // 이메일 형식 확인
    // 이메일 '직접입력'일 경우
    if (emailHost === '' && !email.includes('@')) {
      alert('올바르지 않은 이메일 형식입니다.');
      return;
    }
    // 전화번호 형식 확인
    if (pnum.includes('-') && pnum.length === 13) {
    } else if (pnum.length !== 11) {
      alert('올바르지 않은 전화번호입니다.');
      return;
    } else {
      //전화번호 포멧 변경 xxx-xxxx-xxxx
      const pnumFormat = `${pnum.slice(0, 3)}-${pnum.slice(3, 7)}-${pnum.slice(7)}`;
      setPnum(pnumFormat);
    }
    JoinProcess();
  };
  return <JoinPresenter onChange={onChange} onSubmit={onSubmit} props={props} />;
};

export default JoinContainer;
