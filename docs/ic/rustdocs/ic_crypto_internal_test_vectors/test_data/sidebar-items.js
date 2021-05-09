initSidebarItems({"constant":[["CHROME_ECDSA_P256_PK_DER_HEX",""],["CHROME_ECDSA_P256_SIG_RAW_HEX",""],["ECDSA_P256_PK_1_COSE_DER_WRAPPED_HEX",""],["ECDSA_P256_PK_1_COSE_HEX",""],["ECDSA_P256_PK_2_COSE_DER_WRAPPED_HEX",""],["ECDSA_P256_PK_2_COSE_HEX",""],["ECDSA_P256_PK_3_COSE_DER_WRAPPED_HEX",""],["ECDSA_P256_PK_DER_HEX",""],["ECDSA_P256_SIG_1_DER_HEX",""],["ECDSA_P256_SIG_2_DER_HEX",""],["ECDSA_SECP256K1_PK_DER_HEX",""],["ECDSA_SECP256K1_SIG_RAW_HEX",""],["ED25519_MSG_1_HEX",""],["ED25519_MSG_1_RFC8032_HEX",""],["ED25519_MSG_2_HEX",""],["ED25519_MSG_3_HEX",""],["ED25519_PK_1_DER_HEX",""],["ED25519_PK_1_HEX",""],["ED25519_PK_1_RFC8032_HEX",""],["ED25519_PK_2_DER_HEX",""],["ED25519_PK_2_HEX",""],["ED25519_PK_3_DER_HEX",""],["ED25519_PK_3_HEX",""],["ED25519_SIG_1_HEX",""],["ED25519_SIG_1_RFC8032_HEX",""],["ED25519_SIG_2_HEX",""],["ED25519_SIG_3_HEX",""],["ED25519_SK_1_RFC8032_HEX",""],["FIREFOX_ECDSA_P256_PK_DER_HEX",""],["FIREFOX_ECDSA_P256_SIG_RAW_HEX",""],["SAFARI_ECDSA_P256_PK_DER_HEX","ECDSA-P256 public keys and signatures generated by browsers using Web Crypto API, with the following JavasScript code (note that the signatures are on empty messages): `javascript var enc = new TextEncoder(); window.crypto.subtle.generateKey({name: \"ECDSA\", namedCurve: \"P-256\"},     true, [\"sign\", \"verify\"]).then(function(key) {   window.crypto.subtle.exportKey(\"spki\", key.publicKey).then(function(keydata) {      // e.g. console.log(buf2hex(new Uint8Array(keydata)));   });   window.crypto.subtle.sign({name: \"ECDSA\", namedCurve: \"P-256\",       hash: {name: \"SHA-256\"}}, key.privateKey,       enc.encode(\"\")).then(function(signature) {     // e.g. console.log(buf2hex(new Uint8Array(signature)));   }); });` where `javascript function buf2hex(buffer) { // buffer is an ArrayBuffer    return Array.prototype.map.call(new Uint8Array(buffer),       x => ('00' + x.toString(16)).slice(-2)).join(''); }`"],["SAFARI_ECDSA_P256_SIG_RAW_HEX",""],["WEBAUTHN_ECDSA_P256_PK_COSE_HEX",""],["WEBAUTHN_MSG_1_HEX",""],["WEBAUTHN_MSG_2_HEX",""]]});