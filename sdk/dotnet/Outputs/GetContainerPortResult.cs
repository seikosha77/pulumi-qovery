// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;
using Pulumi;

namespace ediri.Qovery.Outputs
{

    [OutputType]
    public sealed class GetContainerPortResult
    {
        public readonly int ExternalPort;
        public readonly string Id;
        public readonly int InternalPort;
        public readonly bool IsDefault;
        public readonly string Name;
        public readonly string Protocol;
        public readonly bool PubliclyAccessible;

        [OutputConstructor]
        private GetContainerPortResult(
            int externalPort,

            string id,

            int internalPort,

            bool isDefault,

            string name,

            string protocol,

            bool publiclyAccessible)
        {
            ExternalPort = externalPort;
            Id = id;
            InternalPort = internalPort;
            IsDefault = isDefault;
            Name = name;
            Protocol = protocol;
            PubliclyAccessible = publiclyAccessible;
        }
    }
}
