/**
 * Encrypt Message Using Scytale Algorithm
 * @param {string} msg - Plain Text Message To Encrypt
 * @param {number} shift - Amount Of Shift 
 * @returns {string} - Encrypted Message Using Scytale
 */
function encrypt(msg, shift) {
  const msgAsArray = msg
    .split("").filter(i => i !== " ");
  const NUMBER_OF_COLUMNS = shift;
  const encryptedMsgAsArray = [];

  for (let j = 0; j < NUMBER_OF_COLUMNS; j++)
    for (let i = j; i < msgAsArray.length; i += shift)
      encryptedMsgAsArray.push(msgAsArray[i]);

  return encryptedMsgAsArray.join("");
}

/**
 * Decrypt Message Had Been Encrypted Using Scytale Algorithm
 * @param {string} encryptedMsg - Encrypted Message Using Scytale
 * @param {number} shift - Amount Of Shift
 * @returns {string} - Plaintext Message
 */
function decrypt(encryptedMsg, shift) {
  const decryptedMsgAsArray = [];
  const NUMBER_OF_COLUMNS = shift;
  const encryptedMsgAsArray = encryptedMsg.split("");

  for (let j = 0; j < NUMBER_OF_COLUMNS - 1; j++)
    for (let i = j; i < encryptedMsgAsArray.length; i += shift - 1)
      decryptedMsgAsArray.push(encryptedMsgAsArray[i]);

  return decryptedMsgAsArray.join("");
}

/**
 * Tests for encrypt & decrypt functions
 */
const PLAIN_TEXT_MESSAGE = "I am hurt very badly help";
const ENCRYPTED_MESSAGE = "Iryyatbhmvaehedlurlp";
const DECRYPTED_MESSAGE = PLAIN_TEXT_MESSAGE.split(" ").join(""); // remove spaces from plain text message

console.log("Encrypted Message:")
console.log(encrypt(PLAIN_TEXT_MESSAGE, 5))
console.assert(encrypt(PLAIN_TEXT_MESSAGE, 5) === ENCRYPTED_MESSAGE)

console.log();

console.log("Decrypted Message:")
console.log(decrypt(ENCRYPTED_MESSAGE, 5))
console.assert(decrypt(ENCRYPTED_MESSAGE, 5) === DECRYPTED_MESSAGE)

module.exports = {
  encrypt,
  decrypt,
}
