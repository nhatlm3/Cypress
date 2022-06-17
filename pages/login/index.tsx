import { useState } from 'react';
import { Modal, Input, Row, Checkbox, Button, Text } from '@nextui-org/react';
import Mail from '@/components/Mail';
import Password from '@/components/Password';
import styles from './login.module.scss';
import Layout from '@/components/Layout';
function login() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  return (
    <>
      {/* <Layout> */}
      <div className={styles.fullPageLogin}>
        <div className={styles.container}>
          <div className={styles.child}>
            <Button auto color="warning" shadow onClick={handler}>
              Open Login Modal
            </Button>
          </div>
        </div>
      </div>
        <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
          <Modal.Header>
            <Text id="modal-title" size={18}>
              Welcome to
              <Text b size={18}>
                NextUI
              </Text>
            </Text>
          </Modal.Header>
          <Modal.Body>
            <Input
              clearable
              bordered
              fullWidth
              color="primary"
              size="lg"
              id="username"
              placeholder="Email"
              contentLeft={<Mail fill="currentColor" />}
            />
            <Input
              clearable
              bordered
              fullWidth
              id="password"
              color="primary"
              size="lg"
              placeholder="Password"
              contentLeft={<Password fill="currentColor" />}
            />
            <Row justify="space-between">
              <Checkbox>
                <Text size={14}>Remember me</Text>
              </Checkbox>
              <Text size={14}>Forgot password?</Text>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button auto flat color="error" onClick={closeHandler}>
              Close
            </Button>
            <Button id="submit" auto onClick={closeHandler}>
              Sign in
            </Button>
          </Modal.Footer>
      </Modal>
      {/* </Layout> */}
    </>
  )
}
export default login;