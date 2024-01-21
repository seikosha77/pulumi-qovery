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
    public sealed class HelmValuesOverride
    {
        public readonly Outputs.HelmValuesOverrideFile? File;
        public readonly ImmutableDictionary<string, string> Set;
        public readonly ImmutableDictionary<string, string> SetJson;
        public readonly ImmutableDictionary<string, string> SetString;

        [OutputConstructor]
        private HelmValuesOverride(
            Outputs.HelmValuesOverrideFile? file,

            ImmutableDictionary<string, string> set,

            ImmutableDictionary<string, string> setJson,

            ImmutableDictionary<string, string> setString)
        {
            File = file;
            Set = set;
            SetJson = setJson;
            SetString = setString;
        }
    }
}