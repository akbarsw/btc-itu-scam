// Fungsi untuk mengenerate visualisasi blockchain sederhana
function generateBlockchain() {
    const blockchainDiv = document.getElementById('blockchain-visual');
    
    const blockchainData = [
        { block: 1, previousHash: '0', hash: 'abc123', transactions: ['A -> B: 0.5 BTC', 'C -> D: 1.0 BTC'] },
        { block: 2, previousHash: 'abc123', hash: 'def456', transactions: ['B -> C: 0.2 BTC', 'D -> A: 0.3 BTC'] },
        { block: 3, previousHash: 'def456', hash: 'ghi789', transactions: ['A -> D: 0.1 BTC', 'B -> A: 0.5 BTC'] },
    ];

    let visualizationHtml = '<h3>Blockchain Visualisasi:</h3>';
    
    blockchainData.forEach(block => {
        visualizationHtml += `
            <div class="block">
                <p><strong>Block #${block.block}</strong></p>
                <p>Hash Sebelumnya: ${block.previousHash}</p>
                <p>Hash Saat Ini: ${block.hash}</p>
                <p>Transaksi:</p>
                <ul>
                    ${block.transactions.map(tx => `<li>${tx}</li>`).join('')}
                </ul>
            </div>
        `;
    });

    blockchainDiv.innerHTML = visualizationHtml;
}
