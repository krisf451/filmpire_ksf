import React, { useState, useMemo, createContext, useContext } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

export const ColorModeContext = createContext();

function ToggleColorMode({ children }) {
  const [mode, setMode] = useState('light');

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const theme = useMemo(() => createTheme({
    palette: {
      mode,
    },
  }), [mode]);

  const memoizedValue = useMemo(() => ({
    mode,
    setMode,
    toggleColorMode,
  }), []);

  return (
    <ColorModeContext.Provider value={memoizedValue}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default ToggleColorMode;

export const useThemeContext = () => useContext(ColorModeContext);
