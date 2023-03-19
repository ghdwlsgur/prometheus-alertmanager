### 레이블을 활용하여 알람 소거

![label](https://user-images.githubusercontent.com/77400522/226162069-754e66dd-3029-4978-b809-1a398b7c3428.png)

- matchers의 name과 value, 레이블을 활용하여 알람을 생성 및 소거하는 API를 활용

---

### Command

```bash
# 노드 설치
nvm use 17
node -v

# express 환경 셋업
sudo npm i -g express-generator
express

# 라이브러리 설치
sudo npm i -g nodemon pm2
sudo npm i axios nodemailer

# 실행
nodemon ./bin/www
PORT=8080 pm2 start bin/www

# 삭제
pm2 delete www

```

---

#### EC2 비밀번호 설정

```bash
sudo passwd ec2-user
```

#### 비밀번호 접속 허용

```bash
sudo vi /etc/ssh/sshd_config
PasswordAuthentication yes
```

```bash
sudo service sshd restart
```

---

### VSCode Remote SSH 사용시 연결 끊김 현상

- Extensions > @builtin types 검색
- TypeScript and JavaScript Language Features **disable**

---

### 참고

- https://raw.githubusercontent.com/prometheus/alertmanager/main/api/v2/openapi.yaml
- swagger editor
