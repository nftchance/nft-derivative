const { assert } = require('chai')
const { ethers } = require("hardhat");

const chai = require('chai')
    .use(require('chai-as-promised'))
    .should()

describe("Non-Dilutive Token", () => {
    before(async () => {
        [
            owner,
            address1,
            address2
        ] = await ethers.getSigners();

        priceInWei = "20000000000000000"

        Mirror = await ethers.getContractFactory("MockToken");
        mirror = await Mirror.deploy(
            "mirror",
            "MRRR"
        )

        Contract = await ethers.getContractFactory("Derivative");
        contract = await Contract.deploy(
            "Derivative",
            "DRVTV",
            mirror.address,
            1000,
            "ipfs://ipfs/superawesomehash/"
        );

        contract = await contract.deployed();
    })

    it('Contract deploys successfully.', async() => {
        address = contract.address
        assert.notEqual(address, '')
        assert.notEqual(address, 0x0)
        assert.notEqual(address, null)
        assert.notEqual(address, undefined)
    });

    it('Contract has a name.', async() => {
        let name = await contract.name()
        assert.equal(name, 'Derivative')
    });

    it('Mint 100 mock tokens.', async() => {
        for(let i = 0; i < 100; i++) { 
            await mirror.connect(owner).mint(i)
        }
    });

    it('Mint 100 mock tokens.', async() => {
        for(let i = 0; i < 100; i++) { 
            await mirror.connect(owner).mint(i)
        }
    });

    it('Mint 100 mock tokens.', async() => {
        for(let i = 0; i < 100; i++) { 
            await mirror.connect(owner).mint(i)
        }
    });

    it('Mint 100 mock tokens.', async() => {
        for(let i = 0; i < 100; i++) { 
            await mirror.connect(owner).mint(i)
        }
    });

    it('Mint 100 mock tokens.', async() => {
        for(let i = 0; i < 100; i++) { 
            await mirror.connect(owner).mint(i)
        }
    });

    it('Mint 100 mock tokens.', async() => {
        for(let i = 0; i < 100; i++) { 
            await mirror.connect(owner).mint(i)
        }
    });

    it('Mint 100 mock tokens.', async() => {
        for(let i = 0; i < 100; i++) { 
            await mirror.connect(owner).mint(i)
        }
    });

    it('Mint 100 mock tokens.', async() => {
        for(let i = 0; i < 100; i++) { 
            await mirror.connect(owner).mint(i)
        }
    });

    it('Mint 100 mock tokens.', async() => {
        for(let i = 0; i < 100; i++) { 
            await mirror.connect(owner).mint(i)
        }
    });

    it('Mint 100 mock tokens.', async() => {
        for(let i = 0; i < 100; i++) { 
            await mirror.connect(owner).mint(i)
        }
    });

    it('Mint derivative token from owner of parent.', async() => {
        await contract.connect(owner).mint(0)
    });

    it('Mint derivative token from non-owner of parent reverts.', async() => {
        await contract.connect(address1).mint(1).should.be.revertedWith('Derivative: not owner of the source material.')
    });

    it('Mint second derivative token from owner of parent.', async() => {
        await contract.connect(owner).mint(1)
    });

    it('Owner of token before minting reverts.', async() => {
        await contract.connect(address1).ownerOf(2).should.be.revertedWith('ERC721: owner query for nonexistent token')
    });

    it('Minting out of bounds parent reverts.', async() => {
        await contract.connect(address1).mint(1001).should.be.revertedWith('Derivative: not owner of the source material.')
    });

    it('Burning mirror burns derivative', async() => {
        await mirror.transferFrom(owner.address, "0x000000000000000000000000000000000000dEaD", 1)
        assert.equal(await contract.ownerOf(1), "0x000000000000000000000000000000000000dEaD");
    });
})