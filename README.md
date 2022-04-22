# ERC-721 Derivatives

* Note: This code is unaudited and a work of a midnight conversation. If you are going to copy-paste, please take a second to consider the implications of every single line of code.

![Mirrored Derivatives](https://imgur.com/a/fEd5jYa.png)

## Foreword

As the NFT industry matures it is becoming a larger desire for owners of source material to own the rights and thus, the consequences of their ownership. This meaning, that if an owner acquires the source material, the rights to the derivative works do as well. A major benefit of decentralized IP utilization and ownership! Web3 for the win.

Unfortunately, a large majority of the derivative projects are focused around creating an environment that promotes the hostile trading and ownership. Meaning, a bad actor may acquire the deriviative in hopes of keeping it away from the IP owner or even the case where an owner may just want their derivative! But, it's difficult to bundle sale them especially when it costs extra gas. Instead, a derivative deployed in this format will follow the parent token and can be minted with the ownership and can also be burned to destroy the derivative. Plus, if the parent token is burned so is the derivative.

Please note, every person and project will need to make changes to fit their situation best. While this is a concept that can be copy-pasted, copy-pasting this code will be far more complicated than average without full awareness and understanding of what is taking place in the 721 token backend that you've chosen to use.

## Implementation Documentation

This contract is set up to allow for mirrored ownership of Source:Derivative -- A mirrored relationship.

### When deploying

Deploying a mirrored deriviative is almost identical to deploying a normal collection we just need to tell the contract which ownership record we are mirroring. The mirror is the contract that will be used for default ownership. Beyond that, the implementations of Mimetic Metadata have only been changed to adopt the standard of their underlying token.

## Running The Project

Running the tests for the project is very simple. Combined with the in-contract documentation, you should have everything you need to get rolling. Finally, you, too, can create a genuinely non-dilutive NFT collection.

1. Copy example.env to .env and enter values.
2. Use shell commands below:

```shell
npm install
npx hardhat test
```

Speed has been sacrificed to maintain readability and digestibility. This repository has not been set up for speed; again, this is a repository for illustration purposes of what a better future indeed looks like.

## Author Note

This contract is beyond experimental. Honestly, there is a lot going on here. If you are not familiar with [Mimetic Airdrops](https://nftchance.medium.com/the-nft-airdropping-method-of-the-future-mimetic-airdrops-on-ethereum-6f939f7aa697), I first recommend checking that out. Though, inside these contracts, every function has been documented so that you can follow along as usual!
