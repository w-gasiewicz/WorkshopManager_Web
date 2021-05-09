using NUnit.Framework;
using System;
using System.Text;
using WorkshopManager_API.Handlers;

namespace WorkshopManager_TESTS
{
    public class CryptoTestHashing
    {
        private Crypto _crypto;

        [SetUp]
        public void Setup()
        {
            _crypto = new Crypto();
        }

        [Test]
        public void TestCrytpoGenerateSameHash()
        {
            Assert.AreEqual(_crypto.GenerateSaltedHash(Encoding.UTF8.GetBytes("pass"), Encoding.UTF8.GetBytes("salt")),
                _crypto.GenerateSaltedHash(Encoding.UTF8.GetBytes("pass"), Encoding.UTF8.GetBytes("salt")));
        }
    }
}