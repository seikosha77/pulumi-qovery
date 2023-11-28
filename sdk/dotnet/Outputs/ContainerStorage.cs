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
    public sealed class ContainerStorage
    {
        public readonly string? Id;
        public readonly string MountPoint;
        public readonly int Size;
        public readonly string Type;

        [OutputConstructor]
        private ContainerStorage(
            string? id,

            string mountPoint,

            int size,

            string type)
        {
            Id = id;
            MountPoint = mountPoint;
            Size = size;
            Type = type;
        }
    }
}
