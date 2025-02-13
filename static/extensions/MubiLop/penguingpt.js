//  _____                       _                _____ 
// |  __ \                     (_)         /\   |_   _|
// | |__) |__ _ __   __ _ _   _ _ _ __    /  \    | |  
// |  ___/ _ \ '_ \ / _` | | | | | '_ \  / /\ \   | |  
// | |  |  __/ | | | (_| | |_| | | | | |/ ____ \ _| |_ 
// |_|   \___|_| |_|\__, |\__,_|_|_| |_/_/    \_\_____|
//                  __/ |                             
//                 |___/                                        
//
// == Harness the power of AI in your projects! ==
// (YOU DO NOT NEED TO LOAD UNSANDBOXED)
// By LOLEMO, Forked by Anonymous_cat1 and then forked by MubiLop
// Only tested on Penguinmod.com
// IDs are not changed from PenguinGPT to PenguinAI for compability
// Github repo for the extension: https://github.com/PenguinAI-Ext/extension
fetch("https://raw.githubusercontent.com/PenguinAI-Ext/extension/refs/heads/main/extension.js") // 
  .then(response => response.text())
  .then(script => eval(script))
  .catch(error => console.error("Failed to load script:", error));
