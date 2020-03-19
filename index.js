const {
  app,
  BrowserWindow,
  Menu,
} = require('electron');
const path = require('path');
const url = require('url');
const {
  autoUpdater
} = require('electron-updater');

var IMG_DIR = "/src/img/";

let mainWindow;

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  let mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    frame: false,
    minHeight: 600,
    minWidth: 1000,
    icon: path.join(__dirname, IMG_DIR, '23550249.jpg'),
    webPreferences: {
      nodeIntegration: true
    }
  });

  // MENU TOP


  var template = [{
      // (Main)
      label: 'Offline Code',
      submenu: [{
        label: 'О программе ...',
        role: 'about',
        click: () => {
          console.log('About click.')
        }
      }, {
        type: 'separator',
      }, {
        label: 'Выйти из программы',
        role: 'close',
      }]
    },
    {
      // File
      label: 'File',
      submenu: [{
          label: 'New',
          role: 'file-new'
        },
        {
          label: 'Open',
          role: 'file-open'
        },
        {
          label: 'Save',
          role: 'file-save'
        },
        {
          label: 'Save As',
          role: 'file-save-as'
        },
        {
          label: 'Close',
          role: 'file-close'
        },
        {
          type: 'separator'
        },
        {
          label: 'Quit',
          role: 'quit'
        }
      ]
    }, {
      // WINDOW
      label: 'Окно',
      submenu: [{
        label: 'Перезагрузить',
        role: 'reload',
      }]
    },
    {
      // DEVELOPERS
      label: 'Разработчику',
      submenu: [{
          label: 'Toggle DevTools',
          role: 'toggleDevTools',
        },
        {
          label: 'Force Reload',
          role: 'forceReload',
        }
      ]
    }
  ];
  Menu.setApplicationMenu(Menu.buildFromTemplate(template));

  // OTHER


  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, '/src/main.html'),
    protocol: 'file: ',
    slashes: true
  }));


  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, 'loading.html'));

  // Open the DevTools.
  mainWindow.webContents.openDevTools();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);


// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.

autoUpdater.on('checking-for-update', () => {
  sendStatusToWindow('Checking for update...');
})