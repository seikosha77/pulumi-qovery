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

    public sealed class JobScheduleOnStopGetArgs : global::Pulumi.ResourceArgs
    {
        [Input("arguments")]
        private InputList<string>? _arguments;
        public InputList<string> Arguments
        {
            get => _arguments ?? (_arguments = new InputList<string>());
            set => _arguments = value;
        }

        [Input("entrypoint")]
        public Input<string>? Entrypoint { get; set; }

        public JobScheduleOnStopGetArgs()
        {
        }
        public static new JobScheduleOnStopGetArgs Empty => new JobScheduleOnStopGetArgs();
    }
}
