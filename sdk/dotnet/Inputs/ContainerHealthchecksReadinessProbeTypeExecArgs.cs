// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;
using Pulumi;

namespace ediri.Qovery.Inputs
{

    public sealed class ContainerHealthchecksReadinessProbeTypeExecArgs : global::Pulumi.ResourceArgs
    {
        [Input("commands", required: true)]
        private InputList<string>? _commands;
        public InputList<string> Commands
        {
            get => _commands ?? (_commands = new InputList<string>());
            set => _commands = value;
        }

        public ContainerHealthchecksReadinessProbeTypeExecArgs()
        {
        }
        public static new ContainerHealthchecksReadinessProbeTypeExecArgs Empty => new ContainerHealthchecksReadinessProbeTypeExecArgs();
    }
}
