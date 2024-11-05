import { useState } from "react";
import { View } from "react-native";
import {
  Portal,
  Dialog as PaperDialog,
  Text,
  Button,
} from "react-native-paper";

const useDialog = () => {
  const [visible, setVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const showDialog = (title: string, message: string) => {
    setTitle(title);
    setMessage(message);
    setVisible(true);
  };

  const hideDialog = () => setVisible(false);

  const Dialog = () => (
    <View>
      <Portal>
        <PaperDialog visible={visible} onDismiss={hideDialog}>
          <PaperDialog.Title>{title}</PaperDialog.Title>
          <PaperDialog.Content>
            <Text variant="bodyMedium">{message}</Text>
          </PaperDialog.Content>
          <PaperDialog.Actions>
            <Button onPress={hideDialog}>Ok</Button>
          </PaperDialog.Actions>
        </PaperDialog>
      </Portal>
    </View>
  );

  return {
    showDialog,
    hideDialog,
    Dialog,
  };
};

export { useDialog };