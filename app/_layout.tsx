import React from 'react';
import { StyleSheet, View, ActivityIndicator, StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';

const VidyutrenzWebView = () => {
  return (
    <View style={styles.container}>
      {/* Display the status bar */}
      <StatusBar
        barStyle="dark-content" // Options: "default", "light-content", "dark-content"
        backgroundColor="#ffffff" // Background color for Android
      />
      
      {/* WebView to embed the website */}
      <WebView
        source={{ uri: 'https://ev-project.vercel.app/' }} // Website URL
        style={styles.webview}
        startInLoadingState={true}
        renderLoading={() => (
          <ActivityIndicator
            style={styles.loader}
            size="large"
            color="#0000ff"
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  webview: {
    flex: 1,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default VidyutrenzWebView;
