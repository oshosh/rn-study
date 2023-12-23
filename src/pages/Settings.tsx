import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';

function Settings() {
  const [count, setCount] = useState(1);
  const handleClick = () => {
    setCount((p) => p + 1);
  };
  return (
    <View>
      <Pressable onPress={handleClick}>
        <Text>{count}</Text>
      </Pressable>
    </View>
  );
}

export default Settings;
