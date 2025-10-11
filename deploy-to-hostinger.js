#!/usr/bin/env node

/**
 * Manual deployment script for Hostinger
 * Usage: node deploy-to-hostinger.js
 * 
 * Make sure to set these environment variables:
 * - HOSTINGER_FTP_HOST
 * - HOSTINGER_FTP_USERNAME  
 * - HOSTINGER_FTP_PASSWORD
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Starting deployment to Hostinger...');

// Check if dist folder exists
if (!fs.existsSync('./dist')) {
  console.log('📦 Building project...');
  execSync('npm run build', { stdio: 'inherit' });
}

console.log('✅ Build completed!');
console.log('📁 Dist folder contents:');
execSync('ls -la dist/', { stdio: 'inherit' });

console.log('\n🔧 To complete deployment:');
console.log('1. Upload the contents of the dist/ folder to your public_html directory on Hostinger');
console.log('2. Or set up GitHub Actions with FTP credentials in repository secrets');
console.log('3. Or use Hostinger\'s file manager to upload the dist/ folder contents');

console.log('\n📋 GitHub Secrets needed for auto-deployment:');
console.log('- HOSTINGER_FTP_HOST (e.g., files.000webhost.com)');
console.log('- HOSTINGER_FTP_USERNAME (your FTP username)');
console.log('- HOSTINGER_FTP_PASSWORD (your FTP password)');

console.log('\n✨ Deployment ready!');
