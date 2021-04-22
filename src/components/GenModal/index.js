import React, { useEffect, useState } from "react";
import { Button, Header, Icon, Modal } from "semantic-ui-react";

const GenModal = ({title, content, handleFunc, id, error}) => {
  const [open, setOpen] = useState(false);

  const show = () => {
    setOpen(true);
  };

  const hide = () => {
    setOpen(false);
  };

  const handleModalProcess = (id) => {
    setOpen(false);
    handleFunc(id)
  } 

  return (
    <>
      <Modal basic onOpen={show} onClose={hide} open={open} size="small" trigger={<Button>Sil</Button>}>
        <Header icon>
          <Icon name="archive" />
          {title}
        </Header>
        <Modal.Content>
          <p>{content}</p>
          {error && <p>{error}</p>}
        </Modal.Content>
        <Modal.Actions>
          <Button color="green" inverted onClick={() => setOpen(false)}>
            <Icon name="checkmark" /> İptal
          </Button>
          <Button basic color="red" inverted onClick={()=>handleModalProcess(id)}>
            <Icon name="remove" /> Sil
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  );
};

export default GenModal;
