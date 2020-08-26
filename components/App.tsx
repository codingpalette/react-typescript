import * as React from 'react';
import { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logIn, logOut } from '../actions/user';
import { RootState } from '../reducers';
import { UserState } from '../reducers/user';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';


import GameMatcher from "./GameMatcher";

const App: FC = () => {
    const { isLoggingIn, data } = useSelector<RootState, UserState>((state) => state.user);
    const dispatch = useDispatch();

    const onClick = () => {
        dispatch(logIn({
            id: 'zerocho',
            password: '비밀번호',
        }));
    }

    const onLogout = () => {
        dispatch(logOut());
    }


    return(
        <>
            <BrowserRouter>
                <div>
                    <Link to="/game/number-baseball?limit=10&skip=5&page=3">숫자야구</Link>
                    &nbsp;
                    <Link to="/game/rock-scissors-paper">가위바위보</Link>
                    &nbsp;
                    <Link to="/game/lotto-generator">로또생성기</Link>
                    &nbsp;
                    <Link to="/game/index">게임 매쳐</Link>
                </div>
                <div>
                    <Switch>
                        <Route exact path="/" component={GameMatcher} />
                        <Route path="/game/:name" render={() => <GameMatcher />} />
                    </Switch>
                </div>
                <div>
                    {isLoggingIn
                        ? <div>로그인 중</div>
                        : data
                            ? <div>{data.nickname}</div>
                            : '로그인 해주세요.'}
                    {!data
                        ? <button onClick={onClick}>로그인</button>
                        : <button onClick={onLogout}>로그아웃</button>}
                </div>

            </BrowserRouter>
        </>
    )
}

export default App;
