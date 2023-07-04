import React, { useState } from 'react';
import styled from 'styled-components';



export default function App() {

    const [ user, setUser ] = useState({ // 이것도 필요한가..?
        userId: "",
        userPwd: "",
        userName: "",
        userEmail: "",
        userLoca: ""
    });

    const SubmitForm = () => {
        {/* 백엔드 연결하기 */}
    }    

    return (
        <Body>
            <Container>
                <Title>회원가입</Title>

                <Content>
                    <userDetail>
                        <Span>아이디</Span>
                        <Input type="text" placeholder="아이디를 입력하세요" />
                        <Span>비밀번호</Span>
                        <Input type="text" placeholder="비밀번호를 입력하세요" />
                        <Span>이름</Span>
                        <Input type="text" placeholder="이름을 입력하세요" />
                        <Span>전화번호</Span>
                        <Input type="text" placeholder="전화번호를 입력하세요" />
                        <Span>이메일</Span>
                        <Input type="text" placeholder="이메일을 입력하세요" />
                        <Span>지역</Span>
                        <Input type="text" placeholder="사는 지역을 입력하세요" />
                         <Submit onClick={ SubmitForm }>가입하기</Submit>
                    </userDetail>
                </Content>
            </Container>
        </Body>
    );
}

const Body = styled.div`
    height: 100vh;
    justify-content: center;
    padding: 10px;
    background: linear-gradient(135deg, #71b7e6, #9b59b6);
    display: flex;
`;

const Container = styled.div`
    max-width: 700px;
    width: 100%;
    background-color: #fff;
    padding: 25px; 30px;
    border-radius: 30px;
    box-shadow: 0px 5px 10px rgb(0, 0, 0, 0.15);
    align-items: center;
    justify-content: center;
    
`;

const Title = styled.div`
    font-size: 25px;
    font-weight: 500;
    position: relative;
    margin-top: 20px;
    text-align: center;
`;

const Content = styled.div`
    margin-top: 100px;
    margin-left: 180px;
    
`;

const UserDetail = styled.div` 
    display: block;
`;

const Span = styled.span`
    display: flex;
    margin-right: 15px;
    margin-top: 15px;
    margin-bottom: 10px;
`;

const Input = styled.input`
    height: 35px;
    width: 100%;
    max-width: 300px;
    outline: none;
    font-size: 16px;
    border-radius: 5px;
    padding-left: 15px;
    border 1px solid #ccc;
    border-bottom-width: 2px;
    transition: all 0.3s ease;
`;

const Submit = styled.button`
    display: flex;
    width: 100px;
    height: 50px;
    align-itmes: center;
    justify-content: center;
    text-align: center;
    padding-top: 15px;
    margin-top: 60px;
    margin-left: 120px;
    border-radius: 20px;
`;