import { StatusBar } from 'expo-status-bar';
import { Form } from './src/screens/Form';
import { theme } from './src/global'

export default function App() {
  return (
    <>
      <StatusBar backgroundColor={theme.colors.background} style="light" />
      <Form />
    </>
  );
}
