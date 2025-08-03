window.onload = () => {
  document.getElementById('connect').onclick = async () => {
    if (window.solana || window.ethereum) {
      const provider = window.solana || window.ethereum;
      try {
        await provider.connect();
        console.log('Wallet connected:', provider.publicKey || provider.selectedAddress);
      } catch (err) {
        console.error('Connection error:', err);
      }
    } else {
      alert('No compatible wallet found.');
    }
  };

  document.getElementById('trigger').onclick = () => {
    console.log('Triggering TX...');
    // Replace with actual TX logic and signer
    alert('Dummy TX Triggered');
  };
};
